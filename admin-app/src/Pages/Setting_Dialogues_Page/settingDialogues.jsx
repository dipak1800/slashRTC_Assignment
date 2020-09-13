import React, { Fragment, useState } from "react";
import { DIALOGUES_DATA } from "./Dialogues_Details";
import { MdArrowUpward } from "react-icons/md";
import {
  AiOutlineArrowDown,
  AiOutlineRightSquare,
  AiOutlineLeftSquare,
  AiOutlineCloseCircle,
  AiOutlineDollarCircle,
  AiOutlineFolderAdd,
} from "react-icons/ai";
import { TiPencil } from "react-icons/ti";
import Style from "./settingDialogues.module.scss";
import Pagination from "./Pagination/Pagination";
function Setting_Dialog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const index_Of_Last_Item = currentPage * itemsPerPage;
  const index_Of_First_Item = index_Of_Last_Item - itemsPerPage;
  let current_No_Of_Items = DIALOGUES_DATA.slice(
    index_Of_First_Item,
    index_Of_Last_Item
  );
  let paginate = page_Number => {
    setCurrentPage(page_Number);
  };
  return (
    <div className={Style.settings}>
      <div className={Style.addDialog}>
        <button className={Style.addDialogs}>
          <AiOutlineFolderAdd />
          <span>Add Dialogues</span>
        </button>
      </div>
      <table className={Style.dialogTable}>
        <tr>
          <th>Name</th>
          <th>Kind</th>
          <th>Brand</th>
          <th>Export/Import</th>
          <th>Actions</th>
        </tr>
        {current_No_Of_Items.map(data => (
          <Fragment key={data.id}>
            <tr>
              <td>{data.name}</td>
              <td>
                <span className={Style.kind}>{data.kind}</span>
              </td>
              <td>{data.brand}</td>
              <td className={Style.up_Down}>
                <MdArrowUpward className={Style.customUp} />
                <AiOutlineArrowDown className={Style.customDown} />
              </td>
              <td className={Style.actions}>
                <TiPencil className={Style.commonActions} />
                <AiOutlineRightSquare
                  className={Style.commonActions}
                  style={{ margin: "0 14px" }}
                />
                <AiOutlineLeftSquare className={Style.commonActions} />
                <AiOutlineCloseCircle
                  className={Style.commonActions}
                  style={{ margin: "0 14px" }}
                />
                <AiOutlineDollarCircle className={Style.commonActions} />
              </td>
            </tr>
          </Fragment>
        ))}
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={DIALOGUES_DATA.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Setting_Dialog;
