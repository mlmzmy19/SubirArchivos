package PF;

import org.apache.commons.fileupload.ProgressListener;

public class FileUploadListener
    implements ProgressListener
{

    private volatile long bytesRead;
    private volatile long contentLength;
    private volatile long item;

    public FileUploadListener()
    {
        bytesRead = 0L;
        contentLength = 0L;
        item = 0L;
    }

    public void update(long aBytesRead, long aContentLength, int anItem)
    {
        bytesRead = aBytesRead;
        contentLength = aContentLength;
        item = anItem;
    }

    public long getBytesRead()
    {
        return bytesRead;
    }

    public long getContentLength()
    {
        return contentLength;
    }

    public long getItem()
    {
        return item;
    }
}
