import React, { ReactNode, useMemo } from 'react';
import styled from 'styled-components';
import { ButtonSecondary, ButtonSuccess, Dialog } from 'ui/components/atoms';
import { deviceSize } from 'ui/utils';

interface ConfirmDialogProps {
  isVisible: boolean;
  onAccepted: () => void;
  onRejected: () => void;
  children: ReactNode;
  header?: string;
  acceptButtonLabel: string;
  rejectButtonLabel: string;
  width?: string;
}

const StyledDialog = styled(Dialog)`
  .p-dialog-content, .p-dialog-header {
    @media screen and (max-width: ${deviceSize.tablet}px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  .p-dialog-footer {
    padding: 1rem;
    display: flex;
    justify-content: right;
    align-items: center;
    button {
      width: 100%;
    }
    @media screen and (max-width: ${deviceSize.tablet}px) {
      justify-content: center;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

const ConfirmDialog = (props: ConfirmDialogProps) => {
  const {
    header,
    isVisible,
    onAccepted,
    onRejected,
    children,
    acceptButtonLabel,
    rejectButtonLabel,
    width,
  } = props;

  const footer = useMemo(() => (
    <div className="grid col-12 lg:col-6 px-0 lg:px-2">
      <div className="col-6 pl-0">
        <ButtonSecondary label={rejectButtonLabel} icon="pi pi-times" onClick={() => onRejected()} />
      </div>
      <div className="col-6 pr-0">
        <ButtonSuccess label={acceptButtonLabel} icon="pi pi-check" onClick={() => onAccepted()} autoFocus />
      </div>
    </div>
  ), [rejectButtonLabel, acceptButtonLabel, onAccepted, onRejected]);

  return (
    <StyledDialog
      header={header}
      visible={isVisible}
      onHide={() => onRejected()}
      breakpoints={{ [`${deviceSize.tablet}px`]: '80vw', [`${deviceSize.mobileM}px`]: '90vw' }}
      style={{ width: width || '50rem' }}
      draggable={false}
      footer={footer}
    >
      {children}
    </StyledDialog>
  );
};

export { ConfirmDialog };
