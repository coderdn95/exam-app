import JobList from "@/components/JobList";
import SignIn from "@/components/SignIn";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

const production = {
  count: 9,
  results: [
    {
      id: 123,
      project_name: "My Awesome Project",
      project_domain: "software.example.com",
      last_accessed: "2024-03-12T18:45:00Z",
      license_use: [
        {
          license_type: "MIT",
          libraries: ["react", "axios"],
        },
      ],
    },
    {
      id: 456,
      project_name: "E-commerce Platform",
      project_domain: "",
      last_accessed: null,
      license_use: [
        {
          license_type: "Apache 2.0",
          libraries: ["django"],
        },
        {
          license_type: "GPLv3",
          libraries: ["linux-kernel"],
        },
      ],
    },
    {
      id: 789,
      project_name: "Data Analysis Pipeline",
      project_domain: "internal.company.com",
      last_accessed: "2024-03-11T10:30:00Z",
      license_use: [],
    },
    {
      id: 101112,
      project_name: "Mobile Game",
      project_domain: "play.store.com/games/mygame",
      last_accessed: "2024-03-13T08:00:00Z",
      license_use: [
        {
          license_type: "MIT",
          libraries: ["cocos2d-x"],
        },
        {
          license_type: "Creative Commons",
          libraries: ["game assets"],
        },
      ],
    },
    {
      id: 222222,
      project_name: "Internal Tool",
      project_domain: "intranet.mycompany.com",
      last_accessed: "2024-03-10T15:00:00Z",
      license_use: [
        {
          license_type: "BSD-3-Clause",
          libraries: ["angular"],
        },
      ],
    },
    {
      id: 333333,
      project_name: "Machine Learning Model",
      project_domain: "",
      last_accessed: "2024-03-12T12:00:00Z",
      license_use: [
        {
          license_type: "Apache 2.0",
          libraries: ["tensorflow"],
        },
      ],
    },
    {
      id: 444444,
      project_name: "Content Management System",
      project_domain: "www.example.com",
      last_accessed: "2024-03-08",
      license_use: [
        {
          license_type: "LGPL",
          libraries: ["gplv3-licensed-library"],
        },
        {
          license_type: "MIT",
          libraries: ["custom-components"],
        },
      ],
    },
    {
      id: 555555,
      project_name: "IoT Device Firmware",
      project_domain: "iot.example.com",
      last_accessed: "2024-02-29",
      license_use: [
        {
          license_type: "MIT",
          libraries: ["esp32-wifi-library"],
        },
      ],
    },
    {
      id: 666666,
      project_name: "Website Redesign",
      project_domain: "www.newdesign.com",
      last_accessed: "2024-03-14",
      license_use: [
        {
          license_type: "GPLv2",
          libraries: ["bootstrap"],
        },
      ],
    },
  ],
};

const Home = () => {
  return (
    <div className="text-gray-900 dark:text-white">
      <section className="max-w-[720px] mx-auto">
        {/* Header */}
        <header className="py-6">
          <nav className="flex items-center justify-between">
            <ul className="flex gap-6">
              <li className="text-3xl font-bold">
                <Link href="/">Home</Link>
              </li>
            </ul>

            <ThemeToggle />
          </nav>
        </header>
        <div>
          <JobList {...production} />
        </div>
      </section>
    </div>
  );
};

export default Home;
