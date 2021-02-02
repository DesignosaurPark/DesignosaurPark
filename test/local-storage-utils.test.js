// IMPORT MODULES under test here:
import { setUser } from '../local-storage-utils.js';

const test = QUnit.test;

const userTest = {

    userName: 'Alan',
    dinoArray: [
        {
            dinoId: 1,
            species: 'Raptor',
            tRexPercent: 70,
            triceratopsPercent: 20,
            pterodactylPercent: 10,
            name: 'Betty',
            description: 'This is an angry dinosaur.',
            img: 'headingImg.jpg',
            top: 35,
            left: 40,
        }
    ]
};

test('setUser should push a user object into local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = JSON.stringify(userTest);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = setUser(userTest);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
