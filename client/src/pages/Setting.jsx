import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { settingsicons } from "../lib/settingsicons";

function Setting() {
  const [profile, setProfile] = useState(true);
  const [password, setPasword] = useState(false);
  const [notification, setNotification] = useState(false);
  const [chat, setChat] = useState(false);
  const [sessions, setSessions] = useState(false);
  const [applications, setApplications] = useState(false);
  const [team, setTeam] = useState(false);

  const handleSwitch = (e) => {
    if (e.target.id === "profile") {
      setProfile(true);
      setPasword(false);
      setNotification(false);
      setChat(false);
      setSessions(false);
      setApplications(false);
      setTeam(false);
    } else if (e.target.id === "password") {
      setProfile(false);
      setPasword(true);
      setNotification(false);
      setChat(false);
      setSessions(false);
      setApplications(false);
      setTeam(false);
    } else if (e.target.id === "noti") {
      setProfile(false);
      setPasword(false);
      setNotification(true);
      setChat(false);
      setSessions(false);
      setApplications(false);
      setTeam(false);
    } else if (e.target.id === "chat") {
      setProfile(false);
      setPasword(false);
      setNotification(false);
      setChat(true);
      setSessions(false);
      setApplications(false);
      setTeam(false);
    } else if (e.target.id === "session") {
      setProfile(false);
      setPasword(false);
      setNotification(false);
      setChat(false);
      setSessions(true);
      setApplications(false);
      setTeam(false);
    } else if (e.target.id === "application") {
      setProfile(false);
      setPasword(false);
      setNotification(false);
      setChat(false);
      setSessions(false);
      setApplications(true);
      setTeam(false);
    } else if (e.target.id === "team") {
      setProfile(false);
      setPasword(false);
      setNotification(false);
      setChat(false);
      setSessions(false);
      setApplications(false);
      setTeam(true);
    }
  };
  return (
    <div className=" fixed w-full sm:h-[100vh] h-screen left-0  bg-[#141718BF]  flex items-center justify-center z-50 overflow-hidden ">
      {/* container  */}
      <main className=" bg-[#FEFEFE] dark:bg-[#141718] sm:w-[768px] w-full  sm:rounded-[24px] flex  overflow-y-scroll   sm:max-h-[764px] h-full overflow-scroll p-[48px]  justify-between">
        {/* navbarsection  */}
        <section className="w-[212px] flex flex-col">
          {/* 1  */}
          <p
            className={
              profile
                ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px]"
                : "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer px-[16px] font-[600] leading-[24px] text-[14px] text-[#6C7275]"
            }
            id="profile"
            onClick={handleSwitch}>
            {profile && (
              <span className="dark:hidden inline-block">
                {settingsicons.profileactive}
              </span>
            )}
            {!profile && (
              <span className="dark:hidden inline-block">
                {settingsicons.profileinactive}
              </span>
            )}
            {profile && (
              <span className="hidden dark:inline-block">
                {settingsicons.profileactivedark}
              </span>
            )}
            {!profile && (
              <span className="hidden dark:inline-block">
                {settingsicons.profileinactive}
              </span>
            )}
            Edit profile
          </p>
          {/* 2  */}
          <p
            className={
              password
                ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px]"
                : "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer px-[16px] font-[600] leading-[24px] text-[14px] text-[#6C7275]"
            }
            id="password"
            onClick={handleSwitch}>
            {password && (
              <span className="dark:hidden inline-block">
                {settingsicons.passwordactive}
              </span>
            )}
            {!password && (
              <span className="dark:hidden inline-block">
                {settingsicons.passwordinactive}
              </span>
            )}
            {password && (
              <span className="hidden dark:inline-block">
                {settingsicons.passwordactivedark}
              </span>
            )}
            {!password && (
              <span className="hidden dark:inline-block">
                {settingsicons.passwordinactive}
              </span>
            )}
            Password
          </p>
          {/* 3  */}
          <p
            className={
              notification
                ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px]"
                : "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer px-[16px] font-[600] leading-[24px] text-[14px] text-[#6C7275]"
            }
            id="noti"
            onClick={handleSwitch}>
            {notification && (
              <span className="dark:hidden inline-block">
                {settingsicons.notificationactive}
              </span>
            )}
            {!notification && (
              <span className="dark:hidden inline-block">
                {settingsicons.notificationinactive}
              </span>
            )}
            {notification && (
              <span className="hidden dark:inline-block">
                {settingsicons.notificationactivedark}
              </span>
            )}
            {!notification && (
              <span className="hidden dark:inline-block">
                {settingsicons.notificationinactive}
              </span>
            )}
            Notifications
          </p>
          {/* 4  */}
          <p
            className={
              chat
                ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px]"
                : "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer px-[16px] font-[600] leading-[24px] text-[14px] text-[#6C7275]"
            }
            id="chat"
            onClick={handleSwitch}>
            {chat && (
              <span className="dark:hidden inline-block">
                {settingsicons.chatexpactive}
              </span>
            )}
            {!chat && (
              <span className="dark:hidden inline-block">
                {settingsicons.chatexpinactive}
              </span>
            )}
            {chat && (
              <span className="hidden dark:inline-block">
                {settingsicons.chatexpactivedark}
              </span>
            )}
            {!chat && (
              <span className="hidden dark:inline-block">
                {settingsicons.chatexpinactive}
              </span>
            )}
            Chat export
          </p>
          {/* 5  */}
          <p
            className={
              sessions
                ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px]"
                : "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer px-[16px] font-[600] leading-[24px] text-[14px] text-[#6C7275]"
            }
            id="session"
            onClick={handleSwitch}>
            {sessions && (
              <span className="dark:hidden inline-block">
                {settingsicons.sessionactive}
              </span>
            )}
            {!sessions && (
              <span className="dark:hidden inline-block">
                {settingsicons.sessioninactive}
              </span>
            )}
            {sessions && (
              <span className="hidden dark:inline-block">
                {settingsicons.sessionactivedark}
              </span>
            )}
            {!sessions && (
              <span className="hidden dark:inline-block">
                {settingsicons.sessioninactive}
              </span>
            )}
            Sessions
          </p>
          {/* 6  */}
          <p
            className={
              applications
                ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px]"
                : "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer px-[16px] font-[600] leading-[24px] text-[14px] text-[#6C7275]"
            }
            id="application"
            onClick={handleSwitch}>
            {applications && (
              <span className="dark:hidden inline-block">
                {settingsicons.applicationactive}
              </span>
            )}
            {!applications && (
              <span className="dark:hidden inline-block">
                {settingsicons.applicationinactive}
              </span>
            )}
            {applications && (
              <span className="hidden dark:inline-block">
                {settingsicons.applicationactivedark}
              </span>
            )}
            {!applications && (
              <span className="hidden dark:inline-block">
                {settingsicons.applicationinactive}
              </span>
            )}
            Applications
          </p>
          {/* 7  */}
          <p
            className={
              team
                ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px]"
                : "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer px-[16px] font-[600] leading-[24px] text-[14px] text-[#6C7275]"
            }
            id="team"
            onClick={handleSwitch}>
            {team && (
              <span className="dark:hidden inline-block">
                {settingsicons.teamactive}
              </span>
            )}
            {!team && (
              <span className="dark:hidden inline-block">
                {settingsicons.teaminactive}
              </span>
            )}
            {team && (
              <span className="hidden dark:inline-block">
                {settingsicons.teamactivedark}
              </span>
            )}
            {!team && (
              <span className="hidden dark:inline-block">
                {settingsicons.teaminactive}
              </span>
            )}
            Team
          </p>
        </section>
        <section className="">22</section>
      </main>
    </div>
  );
}

export default Setting;
