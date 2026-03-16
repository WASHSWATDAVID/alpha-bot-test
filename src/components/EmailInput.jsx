import styles from './EmailInput.module.css'

export default function EmailInput({ value, onChange, error, disabled }) {
  return (
    <div className={styles.field}>
      <label htmlFor="email" className={styles.label}>
        이메일
      </label>
      <input
        id="email"
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="example@email.com"
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? 'email-error' : undefined}
        className={`${styles.input} ${error ? styles.inputError : ''} ${
          value && !error ? styles.inputFilled : ''
        }`}
      />
      {error && (
        <p id="email-error" className={styles.errorMsg} role="alert">
          <span className={styles.errorIcon} aria-hidden="true">⚠</span>
          {error}
        </p>
      )}
    </div>
  )
}
