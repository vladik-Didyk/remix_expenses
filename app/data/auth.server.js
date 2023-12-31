export async function signup({ email, password }) {
  const existingUser = await prisma.user.findFirst({ where: { email } });

  if (existingUser) {
    const error = new Error("A user with the provided email already exists.");
    error.status = 422;
    throw error;
  }
}
