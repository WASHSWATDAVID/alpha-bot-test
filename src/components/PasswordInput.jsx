import { useState } from 'react'
import styles from './PasswordInput.module.css'

function EyeIcon({ open }) {
  return open ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export default function PasswordInput({ value, onChange, error, disabled }) {
  const [show, setShow] = useState(false)

  return (
    <div className={styles.field}>
      <label htmlFor="password" className={styles.label}>
        비밀번호
      </label>
      <div className={styles.inputWrapper}>
        <input
          id="password"
          type={show ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? 'password-error' : undefined}
          className={`${styles.input} ${error ? styles.inputError : ''} ${
            value && !error ? styles.inputFilled : ''
          }`}
        />
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setShow((v) => !v)}
          aria-label={show ? '비밀번호 숨기기' : '비밀번호 보기'}
          tabIndex={0}
        >
          <EyeIcon open={show} />
        </button>
      </div>
      {error && (
        <p id="password-error" className={styles.errorMsg} role="alert">
          <span className={styles.errorIcon} aria-hidden="true">⚠</span>
          {error}
        </p>
      )}
    </div>
  )
}
