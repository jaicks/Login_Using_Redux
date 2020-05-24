

const initialstate = {};

export default function (state = initialstate, action) {
    switch (action.type) {
        case "USER_LIST":
            return action.payload;

        default:
            return state;
    }
}