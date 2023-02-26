/***************************************************************************************
*    Title: Week 8-Enterprise JavaScript II
*    Author: Alex Thomas
*    Date: 02/26/2023
*    File: http-client.js
*    Description: Enterprise JavaScript set up for the class
*    Source Code Attribution: Week 8 instructions
***************************************************************************************/


export class HttpClient {
    async get(url, params = "") {
        let urlObj = new URL(url);
        urlObj.search = new URLSearchParams(params);
        const res = await fetch(urlObj.toString(), {
            method: "GET"
        })
        return res.json();
    }
}