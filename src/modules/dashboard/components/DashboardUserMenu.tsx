import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { ArrowRightOnRectangleIcon, PencilSquareIcon, UserIcon } from "@heroicons/react/24/outline";
import { getInitials } from "@/lib/auth";

type DashboardUserMenuProps = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string | null;
};

const DashboardUserMenu = ({ name, email, image, role }: DashboardUserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const initials = getInitials(name ?? email ?? "Guest User");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickAway = (event: Event) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickAway);
    document.addEventListener("touchstart", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
      document.removeEventListener("touchstart", handleClickAway);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white transition hover:border-brand-400/60 hover:bg-brand-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {image ? (
          <Image
            src={image}
            alt={name ?? "Account"}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/20 font-semibold uppercase text-brand-100">
            {initials}
          </span>
        )}
        <span className="flex flex-col items-start leading-none">
          <span className="text-xs uppercase tracking-widest text-brand-200">
            {role ? role.replace("-", " ") : "Customer"}
          </span>
          <span className="font-semibold">{name ?? "Guest User"}</span>
        </span>
      </button>

      {isOpen ? (
        <div
          className="absolute right-0 z-30 mt-3 w-72 rounded-2xl border border-white/10 bg-slate-950/95 p-4 text-sm text-slate-200 shadow-xl shadow-slate-950/40 backdrop-blur"
          role="menu"
        >
          <div className="mb-4 flex items-start gap-3">
            {image ? (
              <Image
                src={image}
                alt={name ?? "Account"}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
            ) : (
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/20 text-lg font-semibold uppercase text-brand-100">
                {initials}
              </span>
            )}
            <div>
              <p className="font-semibold text-white">{name ?? "Guest User"}</p>
              <p className="text-xs uppercase tracking-widest text-brand-200">
                {role ? role.replace("-", " ") : "Customer"}
              </p>
              <p className="mt-1 text-xs text-slate-400">{email ?? "No email on file"}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              href="/dashboard/profile"
              className="inline-flex items-center gap-2 rounded-xl border border-transparent bg-brand-500/10 px-3 py-2 font-medium text-white transition hover:border-brand-400/40 hover:bg-brand-500/20"
              onClick={() => setIsOpen(false)}
            >
              <PencilSquareIcon className="h-5 w-5" />
              Edit profile
            </Link>
            <Link
              href="/dashboard/profile"
              className="inline-flex items-center gap-2 rounded-xl border border-white/5 px-3 py-2 font-medium text-slate-200 transition hover:border-brand-400/50 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <UserIcon className="h-5 w-5" />
              View account details
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-transparent px-3 py-2 font-medium text-slate-300 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-200"
              onClick={() => {
                setIsOpen(false);
                void signOut({ callbackUrl: "/" });
              }}
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              Sign out
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DashboardUserMenu;
