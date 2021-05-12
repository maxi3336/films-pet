import { Portal } from "react-portal";
import { Modal, ModalHeader } from "../Modal.styles";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";
import { useRef } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";
import {
  MovieModalBody,
  Title,
  Content,
  Overview,
  Release,
  Footer,
  Button,
} from "./MovieModal.styles";
import { MAIN_IMAGE_URL } from "../../../api/urls";

const MovieModal = ({ movie, close }) => {
  const modalRef = useRef();

  console.log(movie);

  useClickOutside(modalRef, close);

  return (
    <Portal>
      <Modal>
        <MovieModalBody
          ref={modalRef}
          style={{ width: 400, minHeight: 700 }}
          poster={`${MAIN_IMAGE_URL}/${movie.backdrop_path}`}
        >
          <ModalHeader>
            <CloseIcon onClick={close} />
          </ModalHeader>
          <Content>
            <Title>{movie.title}</Title>
            <Overview>
              <h2>Описание:</h2>
              <p>{movie.overview}</p>
            </Overview>
            <Release>
              <h2>Дата выхода: </h2>
              <p>{movie.release_date}</p>
            </Release>
            <Footer>
              <Button>В избранное</Button>
              <Button>Посмотреть позже</Button>
            </Footer>
          </Content>
        </MovieModalBody>
      </Modal>
    </Portal>
  );
};

export default MovieModal;
