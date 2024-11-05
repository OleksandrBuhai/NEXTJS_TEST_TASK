export async function loginRequest(username, password) {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {

        if (response.status === 401) {
            return { error: "Invalid username or password" };
        }
        return { error: "Something went wrong, please try again" };
    }

    const data = await response.json();
    return { data };
}
