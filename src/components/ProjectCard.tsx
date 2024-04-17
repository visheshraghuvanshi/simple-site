"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    thumbnail: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, thumbnail, link }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <Link href={link} legacyBehavior>
                <a>
                    <div className="relative h-48">
                        <Image
                            src={thumbnail}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-opacity duration-300 hover:opacity-80"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{title}</h3>
                        <p className="text-gray-600">{description}</p>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default ProjectCard;