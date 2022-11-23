/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from "react";
import { useIntl } from "react-intl";
import { PageTitle } from "../../../_metronic/layout/core";
import styles from "./styles.module.css";

const UploadProjects: FC = () => {
    return <>
        <div className='col-xl-12'>
            <h1>Upload Projects</h1>

            {/* <form className={styles.form_project}>
              <div className={styles.form_group} >
                <label htmlFor="project_name" className={styles.form_group_label}>Project Name</label>
                <input type="text" id="project_name" className={styles.form_group_input} />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="project_info" className={styles.form_group_label}>Project Info</label>
                <input type="text" id="project_info" className={styles.form_group_input} />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="project_compensation" className={styles.form_group_label}>Project Compensation</label>
                <textarea className={styles.form_group_textarea}></textarea>
              </div>
              <div className={styles.form_group}>
                <label htmlFor="project_uploadFile" className={styles.form_group_label}>Upload Project File</label>
                <input type="file" id="project_uploadFile" className={styles.form_group_fileUpload} />
              </div>
              <div className={styles.form_group}>
                <button className={styles.form_group_btn}>Project Upload</button>
              </div>
            </form> */}


<div className={styles.share}>
  <div className={styles.shareWrapper}>
    <div className={styles.shareTop}>
      <img className={styles.shareProfileImg} src="media/avatars/blank.png" alt="" />
      <textarea placeholder="What's in your mind Safak?" className={styles.shareInput} />
    </div>
    <hr className={styles.shareHr} />
    <div className={styles.shareBottom}>
      <div className={styles.shareOptions}>
        <div className={styles.shareOption}>
          <svg className={styles.photo_svg} focusable="false" color="tomato" aria-hidden="true" viewBox="0 0 24 24" data-testid="PermMediaIcon">
            <path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path>
          </svg>
          <span className={styles.shareOptionText}>Photo or Video</span>
        </div>
        <div className={styles.shareOption}>
        <svg className={styles.tag_svg} focusable="false" color="blue" aria-hidden="true" viewBox="0 0 24 24" data-testid="LabelIcon"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></svg>
          <span className={styles.shareOptionText}>Tag</span>
        </div>
        <div className={styles.shareOption}>
          <svg className={styles.location_svg} focusable="false" color="green" aria-hidden="true" viewBox="0 0 24 24" data-testid="RoomIcon">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
          </svg>
          <span className={styles.shareOptionText}>Location</span>
        </div>
        <div className={styles.shareOption}>
          <svg className={styles.feeling_svg} focusable="false" color="goldenrod" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmojiEmotionsIcon">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zM12 18c-2.28 0-4.22-1.66-5-4h10c-.78 2.34-2.72 4-5 4zm3.5-7c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
          </svg>
          <span className={styles.shareOptionText}>Feelings</span>
        </div>
      </div>
      <button className={styles.shareButton}>Share</button>
    </div>
  </div>
</div>







        </div>
    </>;
}


const UploadProjectsWrapper: FC = () => {
    const intl = useIntl()
    return (
      <>
        <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.Upload'})}</PageTitle>
        <UploadProjects />
      </>
    )
  }
export {UploadProjectsWrapper}
