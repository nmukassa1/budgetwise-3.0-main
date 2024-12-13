import 'server-only'
import {SignJWT, jwtVerify} from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface JWTPayload {
    userId: string;
    // email: string;
    // Add other relevant fields here
    [key: string]: unknown;
}

const key = new TextEncoder().encode(process.env.SESSION_SECRET);


const cookie = {
    name: 'session',
    options: {httpOnly: true, sameSite: 'strict' as const, secure: true, path: '/'},
    duration: 1000 * 60 * 60 * 24 * 7 // 1 week
}


// Encrypts a JWT with the given payload (user / data you want to include) using HS256 algorithm
export async function encryptJWT(payload: JWTPayload) {
    try{
        return new SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .sign(key);
    } catch(error){
        console.log('Error encrypting JWT:', error);
        return null;
    }
}

// Decrypts a JWT with the given session and key
export async function decryptJWT(session: string, key: Uint8Array) {
    if (!session || !key) {
        console.error('Invalid session or key provided');
        return null;
    }

    try {
        const { payload } = await jwtVerify(session, key, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch (error) {
        console.error('Error decrypting JWT:', error);
        return null;
    }
}


export async function createSession(userId: string) {
    try {
        const expires = new Date(Date.now() + cookie.duration);
        const session = await encryptJWT({ userId, expires });

        if (session) {
            (await cookies()).set(cookie.name, session, { expires, ...cookie.options });
            return '/dashboard'
            // Handling redirect in actions.tsx / signUp function instead
        } else {
            throw new Error('Failed to create session');
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error in createSession:', error.stack);
        } else {
            console.error('Error in createSession:', error);
        }
        // Optionally, you could redirect to an error page
    }
}


export async function verifySession() {
    const sessionCookie = (await cookies()).get(cookie.name)?.value;

    const session = sessionCookie ? await decryptJWT(sessionCookie, key) : null;
    
    
    if(!session?.userId){
        redirect('/');
    }

    return {userId: session.userId};
}

export async function deleteSession() {
    ((await cookies()).delete(cookie.name))
    redirect('/');
}