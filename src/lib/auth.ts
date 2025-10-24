import type { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import type { Session } from "next-auth";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const requireUserSession = async (
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<{ session: Session }>> => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);

  if (!session) {
    const callback = encodeURIComponent(ctx.resolvedUrl ?? "/dashboard");

    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=${callback}`,
        permanent: false
      }
    };
  }

  return {
    props: {
      session
    }
  };
};

export const getInitials = (value?: string | null) => {
  if (!value) return "GU";

  const parts = value.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0]!.slice(0, 2).toUpperCase();
  }

  return `${parts[0]!.charAt(0)}${parts[parts.length - 1]!.charAt(0)}`.toUpperCase();
};
