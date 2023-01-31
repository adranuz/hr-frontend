import { Button, Result } from 'antd';
import React from 'react';

interface Props {
  prev?: () => void;
  closeModal?: () => void;
  folio: string;
}
export const LastStep = ({ closeModal, folio }: Props) => {
  return (
    <Result
      status="success"
      title="Request Created Successfully"
      subTitle={`Your request folio ID: ${folio}.`}
      extra={[
        <Button type="primary" key="Close" onClick={closeModal}>
          Close
        </Button>,
      ]}
    />
  );
};
