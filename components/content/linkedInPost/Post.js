import Image from 'next/image'

function Post({ alt }) {
    return (
        <div className="linkedInPost">
            <Image
                src="/images/linkedinpostEdit.jpg"
                width={350}
                height={400}
                alt={alt} />
        </div>
    );
}

export default Post;