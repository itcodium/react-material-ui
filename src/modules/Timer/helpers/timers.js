import uuid from 'react-uuid'
let timers= [
    {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuid(),
        elapsed: 5456099,
        runningSince: Date.now(),
    },
    {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuid(),
        elapsed: 1273998,
        runningSince: null,
    },
];

export default {
    timers:timers
};