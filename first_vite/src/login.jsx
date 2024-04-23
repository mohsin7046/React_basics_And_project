import React from "react"

function Login({username,pass="0000"})
{
return(
    <>
     <form action="" method="get">
     <div class="container">
    <h1>Log-In</h1>
    <div class="username">
        <input type="text" id="user_name" value={username} placeholder="Username" />
    </div>
    <div class="password">
        <input type="text" id="user_pass" value={pass} placeholder="password" />
    </div>
    <button onclick="submit()" type="button">Submit</button>
</div>
</form>
</>
)
}

export default Login