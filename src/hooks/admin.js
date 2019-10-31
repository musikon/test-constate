import { useState } from 'react'
import { useHistory } from "react-router-dom";

const users = {
    admin: 'admin',
    yurii: 'yurii',
};

const listChat = {
    0: [
        { id: 1, text: 'farmers1' },
        { id: 2, text: 'farmers2' },
        { id: 3, text: 'farmers3' },
        { id: 4, text: 'farmers4' },
        { id: 5, text: 'farmers5' },
        { id: 6, text: 'farmers6' },
    ],
    1: [
        { id: 1, text: 'distributor1' },
        { id: 2, text: 'distributor2' },
        { id: 3, text: 'distributor3' },
        { id: 4, text: 'distributor4' },
        { id: 5, text: 'distributor5' },
        { id: 6, text: 'distributor6' },
        { id: 7, text: 'distributor7' },
        { id: 8, text: 'distributor8' },
    ],
};

export function useAdmin() {
    let history = useHistory();

    const [valueTab, setValueTab] = useState(0);

    const handleChangeTab = (event, newValue) => {
        setValueTab(newValue);
    };

    const [permissions, setPermission] = useState({
        password: '',
        login: ''
    });

    const [snackBar, setSnackBar] = useState(false);

    const closeSnackBar = () => setSnackBar(false);

    const handleChangePermissions = (e, state) => {
      const value = e.target.value;
      setPermission({ ...permissions, [state]: value })
    };

    const login = () => {
        const { login, password } = permissions;
        const access = users[login];
        if (access && access === password) {
            localStorage.setItem('token', 'token');
            history.push('/');
        }
        setSnackBar(true)
    };

    const logOut = () => {
        localStorage.removeItem('token');
        history.push('/auth');
    };

    return {
        permissions,
        snackBar,
        valueTab,
        listChat,
        actions: {
            login,
            handleChangePermissions,
            closeSnackBar,
            handleChangeTab,
            logOut,
        }
    }
}
