"use client";

import React, { useEffect, useState } from "react";
import { CircularProgress, Paper } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
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

  const xLabels = ratingsData.map((d) => d.name);
  const yData = ratingsData.map((d) => d.codeforces);
  const maxRating = Math.max(...yData, 0);

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

          <Paper elevation={3}>
            <LineChart
              xAxis={[{ scaleType: "point", data: xLabels }]}
              series={[
                {
                  data: yData,
                  showMark: (props) => yData[props.index] === maxRating,
                },
              ]}
              height={300}
            />
          </Paper>
        </>
      )}
    </div>
  );
}
