export default function TermsAndConditions() {
    const policy = {
        type: 'faq',
        title: 'Terms & Conditions',
        description:
            'This policy explains how we collect, use, and protect your personal data.',
        effectiveDate: '2024-01-01',
        expireDate: '2026-01-01',
        isVisible: true,
    };

    return (
        <section className='mt-10'>
            <h1 className='text-4xl text-center text-highlight font-bold'>
                {policy.title}
            </h1>

            <p className='mt-5'>{policy.description}</p>
        </section>
    );
}
