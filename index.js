function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ name, email })
    }

    fetch("http://localhost:3000/users", configurationObject)
        .then(res => res.json())
        .then(data => data)
        .catch(err => err.message);
}