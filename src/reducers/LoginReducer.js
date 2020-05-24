

const initialstate = {};

export default function (state = initialstate, action) {
    switch (action.type) {
        case "LOGIN_STATUS":
            return action.payload;

        default:
            return state;
    }
}