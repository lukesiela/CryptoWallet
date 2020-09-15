import { useDispatch } from "react-redux";
import { performRegistration} from "../../store/users/actions";

export default () => {
    const dispatch = useDispatch();

    const registerUser = (url, body) => {
        const filteredBody = {
            ...body,
            api_key: "15c97b04fd8ebe0d590455aeba453c50",
            timestamp: Date.now(),
        }
        dispatch(performRegistration(url, filteredBody))
    }

    return { registerUser, }
}