"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContx";
import CartApi from "../Api/CartApi";
import Cart from "./Cart";
import Link from "next/link";

function Header() {
  const { user } = useUser();
  const [ifLogin, setIfLogin] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const [opencart, setopencart] = useState(false);
  const [mnmbl, setmnmbl] = useState(false);

  useEffect(() => {
    setIfLogin(window.location.href.toString().includes("sign-in"));
  }, []);
  useEffect(() => {
    user && getItemCart();
  }, [user]);

  const getItemCart = () => {
    CartApi.getUSerCartItem(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        console.log("res from cart item", res?.data?.data);
        res?.data?.data.forEach((cartitem) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: cartitem.id,
              product: cartitem?.attributes?.products?.data[0],
            },
          ]);
        });
      }
    );
  };
  return (
    !ifLogin && (
      <header className="bg-white sticky top-0 z-10 ">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 shadow-md">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <img src="https://w7.pngwing.com/pngs/92/275/png-transparent-computer-icons-computer-programming-web-development-content-management-system-coding-miscellaneous-angle-text.png" alt="Logo" width={70} height={50} />
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      onClick={() => {
                        {
                          opencart
                            ? setopencart(!opencart)
                            : setopencart(opencart);
                        }
                      }}
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Home{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={() => {
                        {
                          opencart
                            ? setopencart(!opencart)
                            : setopencart(opencart);
                        }
                      }}
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Explore{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={() => {
                        {
                          opencart
                            ? setopencart(!opencart)
                            : setopencart(opencart);
                        }
                      }}
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      About Us{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={() => {
                        {
                          opencart
                            ? setopencart(!opencart)
                            : setopencart(opencart);
                        }
                      }}
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/Cart"
                    >
                      MyCart{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={() => {
                        {
                          opencart
                            ? setopencart(!opencart)
                            : setopencart(opencart);
                        }
                      }}
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/Contacte"
                    >
                      Contact Us{" "}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-bluee hover:opacity-90 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/sign-in"
                  >
                    Login
                  </Link>

                  <div className="hidden sm:flex">
                    <Link
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                      href="/"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-5">
                  <h1
                    onClick={() => {
                      setopencart(!opencart);
                    }}
                    className="flex cursor-pointer font-medium"
                  >
                    <ShoppingCart />({cart?.length})
                  </h1>
                  {opencart && (
                    <Cart setopencart={setopencart} opencart={opencart} />
                  )}
                  <UserButton afterSignOutUrl="/" />
                </div>
              )}

              <div
                onClick={() => {
                  setmnmbl(!mnmbl);
                }}
                className="block md:hidden"
              >
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* MENU MOBILE */}
        <div>
          <ul
            className={`text-center space-y-2 py-2 shadow-md absolute w-full bg-white border-t-2  md:hidden ${
              mnmbl ? "block" : "hidden"
            }`}
          >
            <li>
              <Link
                onClick={() => {
                  {
                    opencart ? setopencart(!opencart) : setopencart(opencart);
                    mnmbl ? setmnmbl(!mnmbl) : setmnmbl(mnmbl);
                  }
                }}
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                Home{" "}
              </Link>
            </li>

            <li>
              <Link
                onClick={() => {
                  {
                    opencart ? setopencart(!opencart) : setopencart(opencart);
                    mnmbl ? setmnmbl(!mnmbl) : setmnmbl(mnmbl);
                  }
                }}
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                Explore{" "}
              </Link>
            </li>

            <li>
              <Link
                onClick={() => {
                  {
                    opencart ? setopencart(!opencart) : setopencart(opencart);
                    mnmbl ? setmnmbl(!mnmbl) : setmnmbl(mnmbl);
                  }
                }}
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                About Us{" "}
              </Link>
            </li>

            <li>
              <Link
                onClick={() => {
                  {
                    opencart ? setopencart(!opencart) : setopencart(opencart);
                    mnmbl ? setmnmbl(!mnmbl) : setmnmbl(mnmbl);
                  }
                }}
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/Cart"
              >
                MyCart{" "}
              </Link>
            </li>

            <li>
              <Link
                onClick={() => {
                  {
                    opencart ? setopencart(!opencart) : setopencart(opencart);
                    mnmbl ? setmnmbl(!mnmbl) : setmnmbl(mnmbl);
                  }
                }}
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/Contacte"
              >
                Contact Us{" "}
              </Link>
            </li>
          </ul>
        </div>
      </header>
    )
  );
}

export default Header;
