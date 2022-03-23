

const fireCoding = () => {
    let data = {
        name: "Coding Battle",
        desc: 'Each participants are required to achieve a certain goal using code in C/C++ . The winner is selected according to effective logic of the program.',
        venue: 'CS Lab',
        registration: 'Pre and Spot Registration',
        participation: '30',
        time: '10:00 AM onwards',
        regFee: '20',
        prize: '<ul><li>First: ₹750</li> <li>Second: ₹500</li></ul>'
    }

    Swal.fire({
        title: "Coding Battle",
        html: `
            <p>${data.desc}</p>
            <table class="align-left" align='center'>
                <tr>
                    <th>Registration fee</th>
                    <td>${data.regFee}</td>
                </tr>
                <tr>
                    <th>Registration Mode</th>
                    <td>${data.registration}</td>
                </tr>
                <tr>
                    <th>Venue</th>
                    <td>${data.venue}</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${data.time}</td>
                </tr>
                <tr>
                    <th>Max Participation</th>
                    <td>${data.participation}</td>
                </tr>
                <tr>
                    <th>Prize</th>
                    <td>${data.prize}</td>
                </tr>
            </table>
            `,
        showCancelButton: false,
        showConfirmButton: false
    })
}

const firePhotography = () => {
    let data = {
        name: "Spot Photography",
        desc: 'The Participants are required to submit the best photo taken according to the Subject given.',
        venue: 'D1 BCA',
        registration: 'Pre and Spot Registration',
        participation: 'No Limit',
        time: '10:00 AM to 1:00 PM',
        regFee: '10',
        prize: '₹500'
    }

    Swal.fire({
        title: data.name,
        html: `
            <p>${data.desc}</p>
            <table class="align-left" align='center'>
                <tr>
                    <th>Registration fee</th>
                    <td>${data.regFee}</td>
                </tr>
                <tr>
                    <th>Registration Mode</th>
                    <td>${data.registration}</td>
                </tr>
                <tr>
                    <th>Venue</th>
                    <td>${data.venue}</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${data.time}</td>
                </tr>
                <tr>
                    <th>Max Participation</th>
                    <td>${data.participation}</td>
                </tr>
                <tr>
                    <th>Prize</th>
                    <td>${data.prize}</td>
                </tr>
            </table>
            `,
        showCancelButton: false,
        showConfirmButton: false
    })
}

const fireGame = () => {
    let data = {
        name: "Game Fest",
        desc: 'The Main competition will have 3 knockout rounds, Consisting of 2 or 3 PC games. The fest will also host Android games as spot registrations.',
        venue: 'CS Lab',
        registration: 'Pre and Spot Registration',
        participation: '100',
        time: '10:00 AM onwards',
        regFee: '20',
        prize: '<ul><li>First: ₹1000</li> <li>Second: ₹500</li></ul>'
    }

    Swal.fire({
        title: data.name,
        html: `
            <p>${data.desc}</p>
            <table class="align-left" align='center'>
                <tr>
                    <th>Registration fee</th>
                    <td>${data.regFee}</td>
                </tr>
                <tr>
                    <th>Registration Mode</th>
                    <td>${data.registration}</td>
                </tr>
                <tr>
                    <th>Venue</th>
                    <td>${data.venue}</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${data.time}</td>
                </tr>
                <tr>
                    <th>Max Participation</th>
                    <td>${data.participation}</td>
                </tr>
                <tr>
                    <th>Prize</th>
                    <td>${data.prize}</td>
                </tr>
            </table>
            `,
        showCancelButton: false,
        showConfirmButton: false
    })
}

const fireKeyBoard = () => {
    let data = {
        name: "KeyBoard Assembling",
        desc: 'Keyboard with missing keys are provided to participants and required to assemble the keyboard correctly. The winner is selected by time taken and correctness.',
        venue: 'D3 BCA',
        registration: 'Pre and Spot Registration',
        participation: '20',
        time: '10:00 AM onwards',
        regFee: '20',
        prize: '₹500'
    }

    Swal.fire({
        title: data.name,
        html: `
            <p>${data.desc}</p>
            <table class="align-left" align='center'>
                <tr>
                    <th>Registration fee</th>
                    <td>${data.regFee}</td>
                </tr>
                <tr>
                    <th>Registration Mode</th>
                    <td>${data.registration}</td>
                </tr>
                <tr>
                    <th>Venue</th>
                    <td>${data.venue}</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${data.time}</td>
                </tr>
                <tr>
                    <th>Max Participation</th>
                    <td>${data.participation}</td>
                </tr>
                <tr>
                    <th>Prize</th>
                    <td>${data.prize}</td>
                </tr>
            </table>
            `,
        showCancelButton: false,
        showConfirmButton: false
    })
}

const fireSpotGame = () => {
    let data = {
        name: "Spot Game",
        desc: 'Participants are challenged with fun involved instant games. Winner is selected considering overall performance.',
        venue: 'D2 BCA',
        registration: 'Pre and Spot Registration',
        participation: 'No Limit',
        time: '10:00 AM onwards',
        regFee: '10',
        prize: '₹500'
    }

    Swal.fire({
        title: data.name,
        html: `
            <p>${data.desc}</p>
            <table class="align-left" align='center'>
                <tr>
                    <th>Registration fee</th>
                    <td>${data.regFee}</td>
                </tr>
                <tr>
                    <th>Registration Mode</th>
                    <td>${data.registration}</td>
                </tr>
                <tr>
                    <th>Venue</th>
                    <td>${data.venue}</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${data.time}</td>
                </tr>
                <tr>
                    <th>Max Participation</th>
                    <td>${data.participation}</td>
                </tr>
                <tr>
                    <th>Prize</th>
                    <td>${data.prize}</td>
                </tr>
            </table>
            `,
        showCancelButton: false,
        showConfirmButton: false
    })
}

const fireSpotDance = () => {
    console.log("hello");
    let data = {
        name: "Spot Dance",
        desc: `Participants are challenged with varieties of songs on spot.
        Winner is selected considering performance and instantaneity.`,
        venue: 'College Courtyard',
        registration: 'Spot Registration',
        participation: 'No Limit',
        time: '3:00 PM onwards',
        regFee: '10',
        prize: '₹750'
    }

    Swal.fire({
        title: data.name,
        html: `
        <p>${data.desc}</p>
        <table class="align-left" align='center'>
            <tr>
                <th>Registration fee</th>
                <td>${data.regFee}</td>
            </tr>
            <tr>
                <th>Registration Mode</th>
                <td>${data.registration}</td>
            </tr>
            <tr>
                <th>Venue</th>
                <td>${data.venue}</td>
            </tr>
            <tr>
                <th>Time</th>
                <td>${data.time}</td>
            </tr>
            <tr>
                <th>Max Participation</th>
                <td>${data.participation}</td>
            </tr>
            <tr>
                <th>Prize</th>
                <td>${data.prize}</td>
            </tr>
        </table>
        `,
        showCancelButton: false,
        showConfirmButton: false
    })
}


const fireExpo = () => {
    let data = {
        name: "EXPO",
        desc: 'The Tech community of Dept. of CS hosts a Learning Hub and Gear Lab, Allowing students to be introduced with new and old technologies.',
        venue: 'D1 BCA',
        registration: 'No Registration',
        participation: 'No Limit',
        time: '10:00 AM onwards',
        regFee: 'No Fee',
        prize: ''
    }

    Swal.fire({
        title: data.name,
        html: `
            <p>${data.desc}</p>
            <table class="align-left" align='center'>
                <tr>
                    <th>Registration fee</th>
                    <td>${data.regFee}</td>
                </tr>
                <tr>
                    <th>Registration Mode</th>
                    <td>${data.registration}</td>
                </tr>
                <tr>
                    <th>Venue</th>
                    <td>${data.venue}</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${data.time}</td>
                </tr>
                <tr>
                    <th>Max Participation</th>
                    <td>${data.participation}</td>
                </tr>
            </table>
            `,
        showCancelButton: false,
        showConfirmButton: false
    })
}


const fireFindMeOut = () => {
    let data = {
        name: "Find Me Out",
        desc: 'Find the word using the given hints. Everyone can participate. Submit the answer using the given link',
        time: 'Before 24/03/2022 2:00 PM',
        prize: '₹200'
    }

    Swal.fire({
        title: data.name,
        html: `
            <img class="findMe" src="assets/img/findme.jpg">
            <p>${data.desc}</p>
            <table class="align-left" align='center'>
                <tr>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${data.time}</td>
                </tr>
                <tr>
                    <th>Prize</th>
                    <td>${data.prize}</td>
                </tr>
            </table>
            <div style="margin:0.5rem">
1            <a class="btn btn-primary" href="https://forms.gle/M5874ME35LmFyDh37" target="_blank">Submit Your Answer</a>
            </div>
            </div>
            `,
        showCancelButton: false,
        showConfirmButton: false
    })
}
