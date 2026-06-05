import './Button.css';

export type ButtonProps = {
  label: string;

  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size: 'small' | 'medium' | 'large';

  disabled?: boolean;
  loading?: boolean;

  icon: string;
  iconPosition: 'left' | 'right';

  backgroundColor?: string;
  textColor?: string;

  onClick?: (data: { label: string; variant: string }) => void;
};

export const Button = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  backgroundColor,
  textColor,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn ${variant} ${size}`}
      disabled={disabled || loading}
      onClick={() => onClick?.({ label, variant })}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      } as React.CSSProperties}
    >
      {loading ? (
        <span className="loader"></span>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span>{icon}</span>}
          {label}
          {icon && iconPosition === 'right' && <span>{icon}</span>}
        </>
      )}
    </button>
  );
};