// "use client"
// import { CompareIcon, Shop } from "@/assets/icons";
// import HeaderAction from "@/components/Actions";
// import Modal from "@/components/Modal";
// import { HeaderActionType } from "@/types/HeaderCenterType";
// import React, { useState } from "react";
// import { Auth } from "./Auth";

// const HeaderCenterActions = () => {
//     const [open, setOpen] = useState<boolean>(false)
//   const activeList = [
//     {
//       id: 1,
//       icon: <CompareIcon />,
//       actionCounnt: 2,
//     },
//     // {
//     //   id: 2,
//     //   icon: <Like />,
//     //   actionCounnt: 11,
//     // },
//     {
//       id: 3,
//       icon: <Shop />,
//       actionCounnt: 7,
//     },
//     // {
//     //   id: 4,
//     //   icon: <ProfileIcon />,
//     //   actionCounnt: 0,
//     // },
//   ];

//   return (
//     <>
//       <div className="flex gap-[15px]">
//         {activeList.map((item: HeaderActionType) => {
//             return item.id == 4 ? <HeaderAction onClick={() => setOpen(true)} key={item.id} actionCounnt={item.actionCounnt} icon={item.icon} /> : <HeaderAction key={item.id} actionCounnt={item.actionCounnt} icon={item.icon} />
//         })}
//       </div>
//       <Modal open={open} setOpen={setOpen}>
//             <Auth closeAction={setOpen}/>
//       </Modal>
//     </>
//   );
// };

// export default HeaderCenterActions;
