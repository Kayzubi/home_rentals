import React from 'react'
import { useDropzone } from 'react-dropzone'
import styles from './dropzone.module.scss'

const Dropzone = () => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({})

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <div className={styles.container}>
      <div {...getRootProps({ className: `${styles.dropzone}` })}>
        <input {...getInputProps()} />
        <span className={styles.uploadText}>
          <p>
            Drag your images here, or <span>browse</span>
          </p>
          <p>Supported: JPG, JPEG, PNG</p>
        </span>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  )
}

export default Dropzone
