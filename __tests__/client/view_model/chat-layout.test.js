'use strict'
const assert =  require("assert")
const chatformat = require('../../../src/client/view_model/chats').default

describe("Format chat time", function() {
    test('returns AM time', ()=>{
        const d = new Date(2018, 11, 24, 10, 33);

        let timeString = chatformat.formatAMPM(d);

        assert(timeString, "10:33 AM");

    })

    test('returns PM time', ()=>{
        const d = new Date(2018, 11, 24, 22, 33);

        let timeString = chatformat.formatAMPM(d);

        assert(timeString, "10:33 PM");

    })

})

describe("Format chat date", () =>{
    test("returns slash separated date", () =>{
    const d = new Date(2018, 11, 24, 10, 33);

    let dateString = chatformat.formatDate()

    assert(dateString, "24/11/2018")

    })

})
