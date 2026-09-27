const express = require("express");
require("dotenv").config();

const getConnection = require("./db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "AssessPro Backend is running 🚀"
    });
});

app.get("/api/assessments", async (req, res) => {
    let connection;

    try {
        connection = await getConnection();

        const result = await connection.execute(`
            SELECT
                id,
                title,
                description,
                duration,
                total_questions
            FROM assessments
            ORDER BY id
        `);

        res.json(result.rows);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to fetch assessments"
        });

    } finally {
        if (connection) {
            await connection.close();
        }
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 AssessPro backend running on http://localhost:${PORT}`);
});