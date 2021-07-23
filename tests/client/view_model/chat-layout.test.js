'use strict'
const should = require('should')
const request = require('supertest')
import assert from 'assert'
import * as chatformat from '../../../src/client/view_model/chats'

describe("Format chat time", function() {
    describe("returns AM time", () =>{
        const d = new Date(2018, 11, 24, 10, 33);

        let timeString = chatformat.formatAMPM(d);

        assert(timeString, "10:33 AM");

    })

    it("returns PM time", () =>{
        const d = new Date(2018, 11, 24, 22, 33);

        let timeString = chatformat.formatAMPM(d);

        assert(timeString, "10:33 PM");

    })

})

describe("Format chat date", () =>{
    it("returns slash separated date", () =>{
    const d = new Date(2018, 11, 24, 10, 33);

    let dateString = chatformat.formatDate()

    assert(dateString, "24/11/2018")

    })

})
