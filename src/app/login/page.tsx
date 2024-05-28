import Image from "next/image";

export default function LoginPage() {
  return (
    <div>
      <Image src="/images/logo-devlinks-large.svg" alt="Logo" width={182.5} height={40} />
      <h2>Login</h2>
      <p>Add your details below to get back into the app</p>

      <form>
        <label>Email address</label>
        <input type="email" name="email" />

        <label>Password</label>
        <input type="password" name="password" />

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account?</p>
      <a href="/register">Create account</a>
    </div>
  );
}
