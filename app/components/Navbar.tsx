'use client'

import Link from "next/link";
import React, { ReactElement, useState } from 'react';
import Image from "next/image";

// TODO: mobile menu

export default function Navbar() {
    return (
        <div className="left-0 top-0 pl-2 z-10 w-full ease-in duration-400">
            <div className="flex p-4 justify-between items-center mx-20">
                {/* logo */}
                <Link href="/">
                    <Image src="/images/ethchi_logo_light.png" alt="ethchi logo" width={80} height={80}/>
                </Link>
                {/* links */}
                <ul className="flex text-2xl justify-end">
                    <li className="hover:underline mx-4">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="/">Hackathon</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="/">Conference</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="/">Venue</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="/">Event Map</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="/">Tickets</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="/">Contribute</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

