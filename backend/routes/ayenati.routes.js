const express = require("express");

const { createData, getData } = require("../controllers/ayenati.controller");
const ayenatiRoute = express.Router();
/**
 * @swagger
 * /api/ayenati-inbound/hl7/message:
 *  post:
 *      summary: Post HL7 message order API
 *      description: This API is used to take orders in the form of HL7 message string.
 *      requestBody:
 *        required: true
 *        content:
 *          text/plain:
 *            schema:
 *              type: string
 *              example: |
 *                HL7 String
 *      responses:
 *          200:
 *              description: HL7 message is created and stored in the database.
 *              content:
 *                application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                        description: Indicates whether the operation was successful.
 *                      message:
 *                        type: string
 *                        description: A message indicating the result of the operation.
 *                  examples:
 *                    successfulResponse:
 *                      value:
 *                        success: true
 *                        message: "HL7 message successfully......"
 *                        data: "Created Data Json"
 *          400:
 *              description: Bad request. This can happen if the request body is missing or malformed.
 *          500:
 *              description: Internal server error. Something went wrong on the server side.
 */

ayenatiRoute.post("/hl7/message", createData);
/**
 * @swagger
 * /api/ayenati-inbound/ayenatiData:
 *   get:
 *     summary: Retrieve all Ayenati orders from the database
 *     description: Endpoint to fetch all Ayenati orders stored in the database.
 *     responses:
 *       '200':
 *         description: Successfully retrieved all Ayenati orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful.
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: Unique identifier of the order.
 *                       ayenatiData:
 *                         type: string
 *                         description: HL7 message data.
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: Date and time when the order was created.
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: Date and time when the order was last updated.
 *                       __v:
 *                         type: number
 *                         description: Version field.
 *       '400':
 *         description: Bad request .
 *       '500':
 *         description: Internal server error. Something went wrong on the server side.
 */

ayenatiRoute.get("/ayenatiData", getData);

module.exports = ayenatiRoute;
