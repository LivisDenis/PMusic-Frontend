import React, { useRef, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useReleaseStore } from '../../../../shared/store/ReleaseStore';
import axios from '../../../../shared/config/axios';
import { ModalLayout } from '../../../../layout';
import { SearchPanel } from '../../../../entities/search';
import { Player } from '../../../../widgets/player';
import styles from './TrackForm.module.scss';

export interface IFormUploadTrack {
  trackName: string;
  descriptionTrack: string;
  production: string;
  trackText: string;
  trackPath: string;
  coverPath: string;
}

const UploadTrack = () => {
  const methods = useForm<IFormUploadTrack>({ mode: 'onBlur' });
  const imgRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLInputElement>(null);
  const { release } = useReleaseStore((state) => state);

  const [fields, setFields] = useState({
    image: '',
    audio: '',
  });

  const onChangeFile = async (e: any, type: string) => {
    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append('trackFiles', file);
      await axios.post('/upload', formData).then(({ data }) => {
        type === 'image' ? setFields({ ...fields, image: data.url }) : setFields({ ...fields, audio: data.url });
      });
    } catch (err) {
      console.warn(err);
    }
  };

  const onSubmit: SubmitHandler<IFormUploadTrack> = async (data) => {
    // await axios.post('/album/create', release).then(({ data }) => console.log(data))
    const res = await axios.post('/track/create', {
      album: { ...release, coverPath: fields.image },
      track: { ...data, trackPath: fields.audio },
    });
    console.log(res);
    setFields({
      audio: '',
      image: '',
    });
    methods.reset();
  };

  return (
    <ModalLayout>
      <div className={styles.modalWrapper}>
        <SearchPanel />
        <div className={styles.modalRelease}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.releaseForm}>
            <h1 className={styles.titleForm}>???????????????? ?????????? ???1</h1>
            <div className={styles.form}>
              <FormProvider {...methods}>
                {/* <NestedInputContainer */}
                {/*  inputName="trackName" */}
                {/*  errorText="???????? ?????????????????????? ?? ????????????????????" */}
                {/*  placeholder="???????????????? ??????????" */}
                {/*  error={methods.formState.errors.trackName?.message!} */}
                {/*  styleInput={styles.formInput} */}
                {/* /> */}
                {/* <NestedInputContainer */}
                {/*  inputName="descriptionTrack" */}
                {/*  errorText="???????? ?????????????????????? ?? ????????????????????" */}
                {/*  placeholder="???????????????? ??????????" */}
                {/*  error={methods.formState.errors.descriptionTrack?.message!} */}
                {/*  styleInput={styles.formInput} */}
                {/* /> */}
                {/* <NestedInputContainer */}
                {/*  inputName="production" */}
                {/*  errorText="???????? ?????????????????????? ?? ????????????????????" */}
                {/*  placeholder="????????????????????" */}
                {/*  error={methods.formState.errors.production?.message!} */}
                {/*  styleInput={styles.formInput} */}
                {/* /> */}
                {/* <NestedInputContainer */}
                {/*  textarea */}
                {/*  inputName="trackText" */}
                {/*  placeholder="??????????" */}
                {/*  error={methods.formState.errors.trackText?.message!} */}
                {/*  styleInput={styles.formInput} */}
                {/* /> */}
              </FormProvider>
              <div className={styles.uploadFile}>
                <span>???????????????? ??????????????</span>
                <input type="file" ref={imgRef} onChange={(e) => onChangeFile(e, 'image')} />
                <button onClick={() => imgRef.current?.click()} type="button">
                  ?????????????? ????????
                </button>
              </div>
              <div className={styles.uploadFile}>
                <span>???????????????? ????????</span>
                <input type="file" ref={audioRef} onChange={(e) => onChangeFile(e, 'audio')} />
                <button onClick={() => audioRef.current?.click()} type="button">
                  ?????????????? ????????
                </button>
              </div>
              <button type="submit" className={styles.formButton}>
                ??????????????????
              </button>
            </div>
          </form>
        </div>
        <Player />
      </div>
    </ModalLayout>
  );
};

export default UploadTrack;
