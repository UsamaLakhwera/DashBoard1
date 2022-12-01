/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from "react";
import { useIntl } from "react-intl";
import { PageTitle } from "../../../_metronic/layout/core";
import {
    TablesWidget10
  } from '../../../_metronic/partials/widgets'

const Users: FC = () => {
    return <>
        <div className='col-xl-12'>
            <TablesWidget10 className='card-xxl-stretch mb-12 mb-xl-12' />
        </div>
    </>;
}


const UsersWrapper: FC = () => {
    const intl = useIntl()
    return (
      <>
        <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'USERS'})}</PageTitle>
        <Users />
      </>
    )
  }
export {UsersWrapper}
