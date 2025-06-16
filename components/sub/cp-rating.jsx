"use client";

import React, { useEffect, useState } from "react";
import { CircularProgress, Paper } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Link from "next/link";

export default function RatingsChart() {
  const handle = "mushfiqbh";
  const apiUrl =
    "https://lifeinsight-fxbwg5eth6becsc4.southindia-01.azurewebsites.net";

  const [ratingsData, setRatingsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCodeforcesData = async () => {
    try {
      const response = await fetch(
        `https://codeforces.com/api/user.rating?handle=${handle}`
      );
      const data = await response.json();
      if (data.status === "OK") {
        return data.result.map((entry, index) => ({
          name: `CF #${index + 1}`,
          codeforces: entry.newRating,
        }));
      }
    } catch (error) {
      console.error("Codeforces fetch failed:", error);
    }
    return [];
  };

  const fetchCodechefData = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/codechef/${handle}`);
      const data = await response.json();

      return data.ratingData.map((entry, index) => ({
        name: `CC #${index + 1}`,
        codechef: Number(entry.rating),
      }));
    } catch (error) {
      console.error("Codechef fetch failed:", error);
    }
    return [];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [cf, cc] = await Promise.all([
          fetchCodeforcesData(),
          fetchCodechefData(),
        ]);

        // Merge both datasets with contest labels
        const maxLength = Math.max(cf.length, cc.length);
        const merged = Array.from({ length: maxLength }).map((_, i) => ({
          name: cf[i]?.name || cc[i]?.name || `#${i + 1}`,
          codeforces: cf[i]?.codeforces ?? null,
          codechef: cc[i]?.codechef ?? null,
        }));

        setRatingsData(merged);
      } catch {
        throw new Error("Cannot Connect");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="h-[300px] flex items-center justify-center">
          <CircularProgress />
        </div>
      ) : (
        <>
          <p className="text-[12px] text-center mb-2">
            My Problem Solving Rating Progress on&nbsp;
            <Link
              href={`https://www.codechef.com/users/${handle}`}
              target="_blank"
              className="underline"
            >
              Codechef
            </Link>
            &nbsp;and&nbsp;
            <Link
              href={`https://codeforces.com/profile/${handle}`}
              target="_blank"
              className="underline"
            >
              Codeforces
            </Link>
          </p>

          <Paper elevation={3} sx={{ pt: 2, pb: 1, pr: 1, pl: 0 }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ratingsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="codeforces"
                  stroke="#8884d8"
                  dot={(props) => {
                    const max = Math.max(
                      ...ratingsData.map((d) => d.codeforces || 0)
                    );
                    if (props.payload.codeforces === max) {
                      return (
                        <circle
                          key={`cf-dot-${props.index}`}
                          cx={props.cx}
                          cy={props.cy}
                          r={5}
                          fill="#8884d8"
                          strokeWidth={1.5}
                        />
                      );
                    }
                    return null;
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="codechef"
                  stroke="#ff7300"
                  dot={(props) => {
                    const max = Math.max(
                      ...ratingsData.map((d) => d.codechef || 0)
                    );
                    if (props.payload.codechef === max) {
                      return (
                        <circle
                          key={`cc-dot-${props.index}`}
                          cx={props.cx}
                          cy={props.cy}
                          r={5}
                          fill="#ff7300"
                          strokeWidth={1.5}
                        />
                      );
                    }
                    return null;
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </>
      )}
    </div>
  );
}
