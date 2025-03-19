import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { settingsicons } from "../lib/settingsicons";
import ProfileS from "./SettingROute/ProfileS";
import Team from "./SettingROute/Team";
import Applications from "./SettingROute/Applications";
import Session from "./SettingROute/Session";
import Chat from "./SettingROute/Chat";
import Password from "./SettingROute/Password";
import Notification from "./SettingROute/Notification";
import Appearance from "./SettingROute/Appearance";
import Signout from "./SettingROute/Signout";

function Setting({ setSettings }) {
  const [profile, setProfile] = useState(true);
  const [password, setPasword] = useState(false);
  const [notification, setNotification] = useState(false);
  const [chat, setChat] = useState(false);
  const [sessions, setSessions] = useState(false);
  const [applications, setApplications] = useState(false);
  const [team, setTeam] = useState(false);
  const [appearance, setAppearance] = useState(false);
  const [signout, setSignOut] = useState(false);

  const [navName, setNavName] = useState("Profile");
  const [nav, setNav] = useState(false);
  const [navIcon, setNavIcon] = useState();
  const [navIconDark, setNavIconDark] = useState();

  const handleSwitch = (e) => {
    if (e.target.id === "profile") {
      setProfile(true);
      setPasword(false);
      setNotification(false);
      setChat(false);
      setSessions(false);
      setApplications(false);
      setTeam(false);
      setAppearance(false);
      setSignOut(false);
      setNavName("Edit profile");
      setNavIcon(settingsicons.profileactive);
      setNavIconDark(settingsicons.profileactivedark);
    } else if (e.target.id === "password") {
      setProfile(false);
      setPasword(true);
      setNotification(false);
      setChat(false);
      setSessions(false);
      setApplications(false);
      setTeam(false);
      setAppearance(false);
      setSignOut(false);
      setNavName("Password ");
      setNavIcon(settingsicons.passwordactive);
      setNavIconDark(settingsicons.passwordactivedark);
    } else if (e.target.id === "noti") {
      setProfile(false);
      setPasword(false);
      setNotification(true);
      setChat(false);
      setSessions(false);
      setApplications(false);
      setTeam(false);
      setAppearance(false);
      setSignOut(false);
      setNavName("Notifications ");
      setNavIcon(settingsicons.notificationactive);
      setNavIconDark(settingsicons.notificationactivedark);
    } else if (e.target.id === "chat") {
      setProfile(false);
      setPasword(false);
      setNotification(false);
      setChat(true);
      setSessions(false);
      setApplications(false);
      setTeam(false);
      setAppearance(false);
      setSignOut(false);
      setNavName("Chat export ");
      setNavIcon(settingsicons.chatexpactive);
      setNavIconDark(settingsicons.chatexpactivedark);
    } else if (e.target.id === "session") {
      setProfile(false);
      setPasword(false);
      setNotification(false);
      setChat(false);
      setSessions(true);
      setApplications(false);
      setTeam(false);
      setAppearance(false);
      setSignOut(false);
      setNavName("Sessions");
      setNavIcon(settingsicons.sessionactive);
      setNavIconDark(settingsicons.sessionactivedark);
    } else if (e.target.id === "application") {
      setProfile(false);
      setPasword(false);
      setNotification(false);
      setChat(false);
      setSessions(false);
      setApplications(true);
      setTeam(false);
      setAppearance(false);
      setSignOut(false);
      setNavName("Applications");
      setNavIcon(settingsicons.applicationactive);
      setNavIconDark(settingsicons.applicationactivedark);
    } else if (e.target.id === "team") {
      setProfile(false);
      setPasword(false);
      setNotification(false);
      setChat(false);
      setSessions(false);
      setApplications(false);
      setTeam(true);
      setAppearance(false);
      setSignOut(false);
      setNavName("Team ");
      setNavIcon(settingsicons.teamactive);
      setNavIconDark(settingsicons.teamactivedark);
    } else if (e.target.id === "appearance") {
      setProfile(false);
      setPasword(false);
      setNotification(false);
      setChat(false);
      setSessions(false);
      setApplications(false);
      setTeam(false);
      setAppearance(true);
      setSignOut(false);
      setNavName("Appearance ");
      setNavIcon(settingsicons.appearanceactive);
      setNavIconDark(settingsicons.appearanceactivedark);
    } else if (e.target.id === "signout") {
      setProfile(false);
      setPasword(false);
      setNotification(false);
      setChat(false);
      setSessions(false);
      setApplications(false);
      setTeam(false);
      setAppearance(false);
      setSignOut(true);
      setNavName("Delete account");
      setNavIcon(settingsicons.delete);
      setNavIconDark(settingsicons.delete);
    }
    setNav(false);
  };

  useEffect(() => {
    setNavIcon(settingsicons.profileactive);
    setNavIconDark(settingsicons.profileactivedark);
  }, []);
  return (
    <div className=" fixed w-full sm:h-[100vh] h-[100vh] left-0  bg-[#141718BF]  flex items-center justify-center z-50 overflow-hidden ">
      {/* container  */}
      <main className=" bg-[#FEFEFE] dark:bg-[#141718] w-full  sm:w-fit  sm:rounded-[24px] flex  overflow-y-scroll   sm:max-h-[896px] max-h-full overflow-scroll p-[48px]  justify-between gap-[48px] sm:flex-row flex-col relative">
        <button
          className="  p-[20px] sm:hidden flex absolute top-0  right-0"
          onClick={() => setSettings(false)}>
          {settingsicons.exit}
        </button>
        {/* navbarsection  */}
        <section className="w-[212px] sm:flex flex-col hidden">
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
          {/* 8  */}
          <p
            className={
              appearance
                ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px]"
                : "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer px-[16px] font-[600] leading-[24px] text-[14px] text-[#6C7275]"
            }
            id="appearance"
            onClick={handleSwitch}>
            {appearance && (
              <span className="dark:hidden inline-block">
                {settingsicons.appearanceactive}
              </span>
            )}
            {!appearance && (
              <span className="dark:hidden inline-block">
                {settingsicons.appeartanceinactive}
              </span>
            )}
            {appearance && (
              <span className="hidden dark:inline-block">
                {settingsicons.appearanceactivedark}
              </span>
            )}
            {!appearance && (
              <span className="hidden dark:inline-block">
                {settingsicons.appeartanceinactive}
              </span>
            )}
            Appearance
          </p>
          <span className=" h-[2px] w-full bg-[#E8ECEF] dark:bg-[#232627] my-[12px]"></span>
          <p
            className={
              !signout
                ? "flex items-center gap-[12px] font-[600] text-[14px] leading-[24px] text-[#D84C10]  px-[16px] py-[8px] cursor-pointer"
                : "flex items-center gap-[12px] font-[600] text-[14px] leading-[24px] text-[#D84C10]  px-[16px] py-[8px] cursor-pointer border-[2px] border-[#D84C10] rounded-full"
            }
            onClick={handleSwitch}
            id="signout">
            {" "}
            <span>{settingsicons.delete}</span> Delete account
          </p>
        </section>
        {/* mobile navbar section  */}
        <section className="w-full flex relative sm:hidden">
          <button className=" font-[600] dark:text-[#FEFEFE] text-[#141718] text-[16px]  leading-[24px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[12px] w-full flex justify-between px-[16px]">
            <p
              className={
                navName === "Delete account"
                  ? "flex items-center gap-[12px] text-[#D84C10]"
                  : "flex items-center gap-[12px]"
              }>
              <span className=" inline-block dark:hidden">{navIcon}</span>{" "}
              <span className=" dark:inline-block hidden">{navIconDark}</span>
              {navName}
            </p>
            <span onClick={() => setNav(!nav)} className=" cursor-pointer">
              {settingsicons.arrows}
            </span>
          </button>
          {nav && (
            <div className="absolute top-[110%]  w-full border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] p-[12px] bg-[#FEFEFE] dark:bg-[#141718]">
              {/* 1  */}
              <p
                className={
                  profile
                    ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px] text-black dark:text-white "
                    : "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer px-[16px] font-[600] leading-[24px] text-[14px] text-[#6C7275] "
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
                    ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px] text-black dark:text-white"
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
                    ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px] text-black dark:text-white"
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
                    ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px] text-black dark:text-white"
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
                    ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px] text-black dark:text-white"
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
                    ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px] text-black dark:text-white"
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
                    ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px] text-black dark:text-white"
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
              {/* 8  */}
              <p
                className={
                  appearance
                    ? "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer border-[2px] border-[#0084FF] rounded-full px-[16px]  font-[600] leading-[24px] text-[14px] text-black dark:text-white"
                    : "flex gap-[12px] w-full py-[8px] items-center  cursor-pointer px-[16px] font-[600] leading-[24px] text-[14px] text-[#6C7275]"
                }
                id="appearance"
                onClick={handleSwitch}>
                {appearance && (
                  <span className="dark:hidden inline-block">
                    {settingsicons.appearanceactive}
                  </span>
                )}
                {!appearance && (
                  <span className="dark:hidden inline-block">
                    {settingsicons.appeartanceinactive}
                  </span>
                )}
                {appearance && (
                  <span className="hidden dark:inline-block">
                    {settingsicons.appearanceactivedark}
                  </span>
                )}
                {!appearance && (
                  <span className="hidden dark:inline-block">
                    {settingsicons.appeartanceinactive}
                  </span>
                )}
                Appearance
              </p>
              <span className=" h-[2px] w-full bg-[#E8ECEF] dark:bg-[#232627] my-[12px]"></span>
              <p
                className={
                  !signout
                    ? "flex items-center gap-[12px] font-[600] text-[14px] leading-[24px] text-[#D84C10]  px-[16px] py-[8px] cursor-pointer"
                    : "flex items-center gap-[12px] font-[600] text-[14px] leading-[24px] text-[#D84C10]  px-[16px] py-[8px] cursor-pointer border-[2px] border-[#D84C10] rounded-full"
                }
                onClick={handleSwitch}
                id="signout">
                {" "}
                <span>{settingsicons.delete}</span> Delete account
              </p>
            </div>
          )}
        </section>

        {/* main sections  */}
        <section className=" sm:w-fit w-full">
          {profile && <ProfileS />}
          {password && <Password />}
          {notification && <Notification />}
          {chat && <Chat />}
          {sessions && <Session />}
          {applications && <Applications setSettings={setSettings} />}
          {team && <Team />}
          {appearance && <Appearance />}
          {signout && <Signout />}
        </section>
      </main>
    </div>
  );
}

export default Setting;
