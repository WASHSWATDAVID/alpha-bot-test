import styles from './LoginButton.module.css'

function Spinner() {
  return (
    <svg
      className={styles.spinner}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="3"
      />
      <path
        d="M12 2a10 10 0 0110 10"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function LoginButton({ loading, disabled }) {
  return (
    <button
      type="submit"
      className={styles.button}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {loading ? (
        <>
          <Spinner />
          <span>로그인 중...</span>
        </>
      ) : (
        '로그인'
      )}
    </button>
  )
}
