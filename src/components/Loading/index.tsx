import ReactLoading from "react-loading"
import { LoadingContainer } from "./styles";

const Loading = () => (
    <LoadingContainer statusLoading={true}>
        <ReactLoading
            type={"spin"}
            color={"rgb(190, 190, 190)"}
            height={'150px'}
            width={'150px'}
        />
    </LoadingContainer>
);

export default Loading;