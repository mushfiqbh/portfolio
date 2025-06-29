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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const codeforcesData = await fetchCodeforcesData();
        setRatingsData(codeforcesData);
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
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </>
      )}
    </div>
  );
}
