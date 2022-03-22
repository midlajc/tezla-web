

const fireCoding = () => {
    let data = {
        name: "Coding Battle",
        desc: 'Each participants are required to achieve a certain goal using code in C/C++ . The winner is selected according to effective logic of the program.',
        venue: 'CS Lab',
        registration: 'Pre and Spot Registration',
        participation: '30',
        time: '10:00 AM onwards',
        regFee: '20'
    }

    Swal.fire({
        title: "Coding Battle",
        text: 'I will close in 2 seconds.',
        // timer: 2000,
        showCancelButton: false,
        showConfirmButton: false
    })
}

const firePhotography = () => {
    let data = {
        name: "Spot Photography",
        desc: 'The Participants are required to submit the best photo taken according to the Subject given.',
        venue: 'D1 BCA',
        registration: 'Spot Registration',
        participation: 'No Limit',
        time: '10:00 AM to 1:00 PM',
        regFee: '10'
    }

    Swal.fire({
        title: data.name,
        text: 'I will close in 2 seconds.',
        // timer: 2000,
        showCancelButton: false,
        showConfirmButton: false
    })
}

const fireGame = () => {
    let data = {
        name: "Game Fest",
        desc: 'The Main competition will have 3 knockout rounds, Consisting of 2 or 3 PC games. The fest will also host Android games as spot registrations.',
        venue: 'CS Lab, Final round:Conference Hall',
        registration: 'Pre and Spot Registration',
        participation: '100',
        time: '10:00 AM onwards',
        regFee: '20'
    }

    Swal.fire({
        title: data.name,
        text: 'I will close in 2 seconds.',
        // timer: 2000,
        showCancelButton: false,
        showConfirmButton: false
    })
}

const fireKeyBoard = () => {
    let data = {
        name: "KeyBoard Assembling",
        desc: 'Keyboard with missing keys are provided to participants and required to assemble the keyboard correctly. The winner is selected by time taken and correctness.',
        venue: 'Pre and Spot Registration',
        registration: 'D3 BCA',
        participation: '20',
        time: '10:00 AM onwards',
        regFee: '20'
    }

    Swal.fire({
        title: data.name,
        text: 'I will close in 2 seconds.',
        // timer: 2000,
        showCancelButton: false,
        showConfirmButton: false
    })
}

const fireSpotGame = () => {
    let data = {
        name: "Spot Game",
        desc: 'Participants are challenged with fun involved instant games. Winner is selected considering overall performance.',
        venue: 'D2 BCA',
        registration: 'Spot Registration',
        participation: '',
        time: '10:00 AM onwards',
        regFee: '10'
    }

    Swal.fire({
        title: data.name,
        text: 'I will close in 2 seconds.',
        // timer: 2000,
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
        participation: '',
        time: '3:00 PM onwards',
        regFee: '10'
    }

    Swal.fire({
        title: data.name,
        text: 'I will close in 2 seconds.',
        // timer: 2000,
        showCancelButton: false,
        showConfirmButton: false
    })
}


const fireExpo = () => {
    let data = {
        name: "Expo",
        desc: 'The Tech community of Dept. of CS hosts a Learning Hub and Gear Lab, Allowing students to be introduced with new and old technologies.',
        venue: 'D1 BCA',
        registration: 'No Registration',
        participation: 'No Limit',
        time: '10:00 AM onwards',
        regFee: ''
    }

    Swal.fire({
        title: 'Expo',
        // text: 'I will close in 3 seconds.',
        // timer: 2000,
        html: `
            <h4>test</h4>
            <p>test</p>
        `,
        showCancelButton: false,
        showConfirmButton: false
    })
}
