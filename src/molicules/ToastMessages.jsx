import toast from 'react-hot-toast';
import styled, { css, keyframes } from 'styled-components';

import CustomToast from '../atoms/others/CustomToast';

// Define keyframes
const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(40px);
  }
`;

// Styled wrapper with proper animation handling and prop filtering
const ToastWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'visible', // Filter out 'visible' prop
})`
  ${({ visible }) => css`
    animation: ${visible ? slideIn : slideOut} 0.5s ease-out forwards;
  `}
`;

export const successToast = (message, type = 'success') => {
  toast.custom(
    (t) => (
      <ToastWrapper visible={t.visible}>
        <CustomToast message={message} type={type} id={t.id} t={t} />
      </ToastWrapper>
    ),
    {
      duration: 4000,
      position: 'bottom-center',
    }
  );
};

export const errorToast = (message, type = 'error') => {
  toast.custom(
    (t) => (
      <ToastWrapper visible={t.visible}>
        <CustomToast message={message} type={type} id={t.id} t={t} />
      </ToastWrapper>
    ),
    {
      duration: 4000,
      position: 'bottom-center',
    }
  );
};
