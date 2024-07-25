import React from "react";
import AvatarEditor from "react-avatar-editor";
import { LeftArrowSVG, RightArrowSVG } from "../icons";
import { createSuccessToast } from "../services/toastCreation";

interface AppProps {
  setImage: (data: string) => void;
  setEditAvatar: () => void;
}

export default class App extends React.Component<AppProps> {
  state = {
    image: "",
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: "1",
    rotate: "0",
    borderRadius: 100,
    preview: null,
    width: 128,
    height: 128,
  };

  handlePositionChange = (position: any) => {
    this.setState({ position });
  };

  handleNewImage = async (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if (e !== null && e.target.files !== null)
      this.setState({ image: e.target.files[0] });
  };

  handleScale = (e: { target: { value: string } }) => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  rotateLeft = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    this.setState({ rotate: +this.state.rotate - 90 });
  };

  rotateRight = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    this.setState({ rotate: this.state.rotate + 90 });
  };

  handleSave = (data: any) => {
    console.log(data);

    const img = this.editor.getImageScaledToCanvas().toDataURL();
    const rect = this.editor.getCroppingRect();

    // console.log( 'img' , img);

    this.setState({
      preview: {
        img,
        rect,
        scale: this.state.scale,
        width: this.state.width,
        height: this.state.height,
        borderRadius: this.state.borderRadius,
      },
    });

    this.props.setImage(img);
    const notify = createSuccessToast({
      message:
        "La imagen fue generada, no olvides enviar el formulario de edicion para que se guarde",
      onClose : this.props.setEditAvatar
    });
    notify();
  };
  editor: any;

  setEditorRef = (editor: any) => {
    if (editor) {
      this.editor = editor;
    }
  };

  handleXPosition = (e: { target: { value: string } }) => {
    const x = parseFloat(e.target.value);
    this.setState({ position: { ...this.state.position, x } });
  };

  handleYPosition = (e: { target: { value: string } }) => {
    const y = parseFloat(e.target.value);
    this.setState({ position: { ...this.state.position, y } });
  };

  render() {
    return (
      <>
        <div className=" flex flex-col justify-center items-center px-6 gap-6">
          <AvatarEditor
            ref={this.setEditorRef}
            scale={parseFloat(this.state.scale)}
            width={this.state.width}
            height={this.state.height}
            position={this.state.position}
            onPositionChange={this.handlePositionChange}
            rotate={parseFloat(this.state.rotate)}
            borderRadius={this.state.width / (100 / this.state.borderRadius)}
            image={this.state.image}
          />
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={this.handleNewImage}
          />

          <p className=" font-bold text-base text-black font-lato">
            Agranda o achica tu imagen:
          </p>
          <input
            type="range"
            name="scale"
            onChange={this.handleScale}
            min={this.state.allowZoomOut ? "0.1" : "1"}
            max="2"
            step="0.01"
            defaultValue="1"
          />

          <div className="flex flex-row items-center gap-6 justify-center">
            <button
              onClick={this.rotateLeft}
              className=" bg-lima-100 rounded-full p-1"
            >
              <LeftArrowSVG />
            </button>
            <p className=" font-bold text-base text-black font-lato">
              Gira tu imagen:
            </p>
            <button
              onClick={this.rotateRight}
              className=" bg-lima-100 rounded-full p-1"
            >
              <RightArrowSVG />
            </button>
          </div>

          <input
            className=" cursor-pointer bg-[#C1FF72] rounded-xl w-[327px] h-[64px] font-lato text-heading font-bold min-[566px]:w-full"
            type="button"
            onClick={this.handleSave}
            value="Guardar"
          />

          {/* {!!this.state.preview && <img src={this.state.preview.img} />} */}
        </div>
      </>
    );
  }
}
