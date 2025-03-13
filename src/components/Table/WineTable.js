"use client";
import { nanoid } from "nanoid";
import React from "react";

const WineTable = ({ data }) => {
  // Utility functions
  function calculateMean(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }

  function calculateMedian(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
  }

  function calculateMode(arr) {
    const freq = {};
    let max = 0;
    let mode;
    arr.forEach((el) => {
      freq[el] = (freq[el] || 0) + 1;
      if (freq[el] > max) {
        max = freq[el];
        mode = el;
      }
    });
    return mode;
  }
  const classes = [...new Set(data.map((item) => item.Alcohol))];
  const rows = classes.map((cls) => {
    const flavanoids = data
      .filter((item) => item.Alcohol === cls)
      .map((item) => item.Flavanoids);
    return (
      <tr key={nanoid()}>
        <td>{cls}</td>
        <td>{calculateMean(flavanoids)}</td>
        <td>{calculateMedian(flavanoids)}</td>
        <td>{calculateMode(flavanoids)}</td>
      </tr>
    );
  });
  // console.log(flavanoids, "flavonoie");
  return (
    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Mean</th>
          <th>Median</th>
          <th>Mode</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default WineTable;
