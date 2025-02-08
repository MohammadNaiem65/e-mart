export default function RatingStars({
    className,
    length = 5,
    rating = 5,
    width = '1rem',
    height = '1rem',
    activeColor = 'primary',
    muteColor = 'gray-500',
}) {
    return (
        <div className={className}>
            {Array.from({ length }).map((_, index) => (
                <svg
                    key={index}
                    width={width}
                    height={height}
                    viewBox='0 0 13 12'
                    xmlns='http://www.w3.org/2000/svg'
                    fill={index + 1 <= rating ? activeColor : muteColor}
                >
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M6.15065 8.90644L2.42288 11.7541L3.97925 7.32883L0.118996 4.6635L4.80865 4.7762L6.15065 0.28125L7.49264 4.7762L12.1823 4.6635L8.32204 7.32883L9.87841 11.7541L6.15065 8.90644Z'
                    />
                </svg>
            ))}
        </div>
    );
}
