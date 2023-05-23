import axios from "axios";

const URL = "https://637b5d216f4024eac20b7454.mockapi.io";

export const fetchUsers = () => axios.get(`${URL}/user-nike`);
