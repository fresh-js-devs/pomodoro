import styled from "@emotion/styled";

const Box = styled.div(
  {
    display: "flex"
  },
  props => {
    const {
      margin,
      flexDirection,
      marginBottom,
      marginTop,
      justifyContent,
      alignItems,
      visibility
    } = props;

    return {
      margin,
      flexDirection,
      marginBottom,
      marginTop,
      justifyContent,
      alignItems,
      visibility
    };
  }
);

export default Box;
