const interval1 = [7, 12];

if (interval1[1] >= interval2[0]) {
    const x = interval2[0];
    const y = Math.min(interval1[1], interval2[1]);
    const intersection = [x, y];
    console.log("Sankirta egzistuoja:", intersection);
} else {
    console.log("Sankirta neegzistuoja");
    }